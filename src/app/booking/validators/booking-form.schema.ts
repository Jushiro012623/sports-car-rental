import {z} from "zod";

export const bookingFormSchema = z
    .object({
        fullName: z
            .string()
            .trim()
            .min(2, "Full name must be at least 2 characters")
            .max(80, "Full name must be less than 80 characters"),

        phoneNumber: z
            .string()
            .trim()
            .min(7, "Phone number is too short")
            .max(20, "Phone number is too long")
            .regex(/^[+\d\s()-]+$/, "Phone number contains invalid characters"),

        rideId: z
            .string()
            .trim()
            .min(1, "Please choose your ride"),

        pickUpDate: z
            .string()
            .trim()
            .min(1, "Pick-up date is required"),

        dropOffDate: z
            .string()
            .trim()
            .min(1, "Drop-off date is required"),
    })
    .refine(
        (values) => {
            const pickUpDate = new Date(values.pickUpDate);
            const dropOffDate = new Date(values.dropOffDate);

            if (Number.isNaN(pickUpDate.getTime()) || Number.isNaN(dropOffDate.getTime())) {
                return false;
            }

            return dropOffDate >= pickUpDate;
        },
        {
            path: ["dropOffDate"],
            message: "Drop-off date must be after pick-up date",
        },
    );

export type BookingFormValues = z.infer<typeof bookingFormSchema>;