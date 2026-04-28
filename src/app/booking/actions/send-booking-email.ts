'use server';

import {bookingFormSchema} from "@app/app/booking/validators/booking-form.schema";
import {sendMail} from "@app/lib/send-mail";

export type BookingEmailActionState = {
    success: boolean;
    message: string;
    errors?: Record<string, string>;
};

export async function sendBookingEmailAction(
    formData: FormData,
): Promise<BookingEmailActionState> {
    const result = bookingFormSchema.safeParse({
        fullName: formData.get("full_name"),
        phoneNumber: formData.get("phone_number"),
        rideId: formData.get("ride_id"),
        pickUpDate: formData.get("pick_up_date"),
        dropOffDate: formData.get("drop_off_date"),
    });

    if (!result.success) {
        return {
            success: false,
            message: "Please fix the form errors.",
            errors: Object.fromEntries(
                result.error.issues.map((issue) => [
                    String(issue.path[0]),
                    issue.message,
                ]),
            ),
        };
    }

    const {fullName, phoneNumber, rideId, pickUpDate, dropOffDate} = result.data;

    try {
        await sendMail({
            email: process.env.SMTP_SERVER_USERNAME ?? "",
            subject: `New booking request from ${fullName}`,
            text: `
New booking request

Full name: ${fullName}
Phone number: ${phoneNumber}
Selected ride: ${rideId}
Pick-up date: ${pickUpDate}
Drop-off date: ${dropOffDate}
            `.trim(),
            html: `
                <h2>New booking request</h2>
                <p><strong>Full name:</strong> ${fullName}</p>
                <p><strong>Phone number:</strong> ${phoneNumber}</p>
                <p><strong>Selected ride:</strong> ${rideId}</p>
                <p><strong>Pick-up date:</strong> ${pickUpDate}</p>
                <p><strong>Drop-off date:</strong> ${dropOffDate}</p>
            `,
        });

        return {
            success: true,
            message: "Booking request sent successfully.",
        };
    } catch (error) {
        console.error("Booking email failed:", error);

        return {
            success: false,
            message: "Failed to send booking request. Please try again.",
        };
    }
}