import Image from "next/image";
import { Mail, MapPin, Phone } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-white/10 bg-[#002817] py-12">
      <div className="premium-shell">
        <div className="grid gap-10 lg:grid-cols-[1.2fr_.8fr_.8fr]">
          <div>
            <div className="relative h-14 w-52">
              <Image
                src="/images/logo.png"
                alt="Mofebissyn Edutours Ltd"
                fill
                className="object-contain object-left"
              />
            </div>

            <p className="mt-5 max-w-md leading-7 text-ivory/65">
              Premium educational consulting, travel, visa, transcript, test
              preparation, and international training support. Empowering Global
              Dreams.
            </p>
          </div>

          <div>
            <h4 className="font-heading text-xl font-black">Explore</h4>

            <div className="mt-5 grid gap-3 text-sm font-semibold text-ivory/65">
              <a href="#about" className="hover:text-lime-glow">
                Overview
              </a>

              <a href="#services" className="hover:text-lime-glow">
                Services
              </a>

              <a href="#pathway" className="hover:text-lime-glow">
                How it works
              </a>

              <a href="#survey" className="hover:text-lime-glow">
                Survey
              </a>
            </div>
          </div>

          <div>
            <h4 className="font-heading text-xl font-black">Contact</h4>

            <div className="mt-5 space-y-4 text-sm font-semibold text-ivory/65">
              <p className="flex gap-3">
                <Phone className="h-5 w-5 shrink-0 text-lime-glow" />
                +2348062490306
              </p>

              <p className="flex gap-3">
                <Mail className="h-5 w-5 shrink-0 text-lime-glow" />
                Mofebissyn.ng@gmail.com
              </p>

              <p className="flex gap-3">
                <MapPin className="h-5 w-5 shrink-0 text-lime-glow" />
                Ibadan, Oyo State, Nigeria
              </p>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col justify-between gap-4 border-t border-white/10 pt-6 text-sm text-ivory/50 sm:flex-row">
          <p>
            © {new Date().getFullYear()} Mofebissyn Edutours Ltd. All rights
            reserved.
          </p>
          <p>@mofebington • Website under development</p>
        </div>
      </div>
    </footer>
  );
}