import Link from "next/link";
import LogoMexpenses from "../public/assets/mexpenses-black.svg";
import Image from "next/image";

export default function NotFound() {
    return (
        <main className="flex min-h-screen justify-center items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
            <div className="text-center">
                <Image src={LogoMexpenses} className="mx-auto" width={150} height={150} alt="Mexpenses"/>
                <h1 className="mt-4 text-3xl font-bold tracking-tight text-indigo-500 sm:text-5xl">Página não encontrada</h1>
                <p className="mt-6 text-base leading-7 text-gray-600">Lamentamos, mas não conseguimos encontrar a página que procura.</p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <Link href="/" className="text-sm font-semibold text-gray-900 hover:text-gray-600">
                        Página inicial <span aria-hidden="true">&rarr;</span>
                    </Link>
                </div>
            </div>
        </main>
    );
}