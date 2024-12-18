import Link from "next/link";
import { BiLogoGmail, BiLogoWhatsapp, BiLogoInstagramAlt } from "react-icons/bi";
import { TfiLinkedin } from "react-icons/tfi";
import { IoLogoInstagram, IoLogoFacebook, IoLocation } from "react-icons/io5";
import { IoLogoWhatsapp } from "react-icons/io";

const contacts = [
    {
        id: 1,
        image: '/contacts/linkedin.svg',
        alt: 'instagram',
        href: 'https://www.instagram.com/vivanimaloficial/'
    },
    {
        id: 2,
        image: '/contacts/github.svg',
        alt: 'facebook',
        href: 'https://www.facebook.com/VivanimalGondomar?locale=pt_PT'
    },
    {
        id: 3,
        image: '/contacts/cv.svg',
        alt: 'endereço',
        href: `https://www.google.com/maps?q=${encodeURIComponent("Tv. Granja, 4435-268 Rio Tinto")}`
    },
    {
        id: 4,
        image: '/contacts/gmail.svg',
        alt: 'gmail',
        href: 'mailto:vivanimal@gmail.com?subject=Helloo&body=EWrite your message here'
    },
    {
        id: 5,
        image: '/contacts/whatsapp.svg',
        alt: 'whatsapp',
        href: 'https://wa.me/351910022248'
    },
];

export default function Contancts() {
    return (
        <article className="flex gap-4">
            {contacts.map((e, i) => (
                <Link
                    key={i}
                    className="w-12 h-12 rounded-full border border-white flex justify-center items-center text-white hover:border-[#1D7B83] hover:bg-white hover:text-[#1D7B83] shadow-md cursor-pointer"
                    href={e.href}
                    aria-label={e.alt}
                    target="_blank"
                >
                    {e.alt === 'instagram' && <BiLogoInstagramAlt className="w-6 h-6" />}
                    {e.alt === 'facebook' && <IoLogoFacebook className="w-6 h-6" />}
                    {e.alt === 'endereço' && <IoLocation className="w-6 h-6" />}
                    {e.alt === 'gmail' && <BiLogoGmail className="w-5 h-5" />}
                    {e.alt === 'whatsapp' && <IoLogoWhatsapp className="w-6 h-6" />}
                </Link>
            ))}
        </article>
    );
}
