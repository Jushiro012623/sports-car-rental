import {HashLoader} from "react-spinners";

export default function Loading() {
    return (
        <main className="flex min-h-screen w-full items-center justify-center px-5 pt-24">
            <div className="flex flex-col items-center gap-4 text-center">
                <HashLoader
                    color="#ffffff"
                    size={70}
                />
            </div>
        </main>
    );
}