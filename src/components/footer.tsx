import Logo from "@/components/logo";
import clsx from "clsx";
import Link from "next/link";

export function Footer() {
  return (
    <footer
      className={clsx(
        "mt-14 text-center font-raleway max-w-xl w-full mx-auto border-t dark:border-neutral-600"
      )}>
      <div className="flex gap-8 sm:gap-20 mt-10">
        <div className="relative top-6 left-2 sm:left-8">
          <Logo />
        </div>
        <section className="flex gap-10 text-sm mb-10">
          <div className="flex flex-col items-start gap-2">
            <h4>About</h4>
            <ul className="flex flex-col items-start gap-2">
              <li className="text-neutral-400 dark:hover:text-white transition-colors cursor-pointer">
                Fmawo
              </li>
              <li className="text-neutral-400 dark:hover:text-white transition-colors cursor-pointer">
                Mail
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h4>Legal</h4>
            <ul>
              <li className="text-neutral-400 dark:hover:text-white transition-colors cursor-pointer">
                <Link href="/legal/privacy-policy">Privacy Policy</Link>
              </li>
            </ul>
          </div>
          <div className="flex flex-col items-start gap-2">
            <h4>Others</h4>
            <ul>
              <li className="text-neutral-400 dark:hover:text-white transition-colors cursor-pointer">
                <Link href="/inquiry">Inquiry</Link>
              </li>
            </ul>
          </div>
        </section>
      </div>

      <span className="text-neutral-600 dark:text-neutral-400 border-neutral-100 text-sm text-center">
        Copyright(C) 2023 - 2024 fmawo.com All Rights Reserved.
      </span>
    </footer>
  );
}
