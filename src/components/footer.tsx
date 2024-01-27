import Link from "next/link";

export function Footer() {
  return (
    <footer className="mt-14 text-center font-raleway max-w-xl w-full mx-auto border-t dark:border-neutral-600">
      <section className="flex gap-10 text-sm my-10">
        <div className="flex flex-col items-start gap-2">
          <h4>About Fmawo</h4>
          <ul className="flex flex-col items-start gap-2">
            <li className="text-neutral-400 dark:hover:text-white transition-colors cursor-pointer">
              Github
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
      </section>
      <span className="text-neutral-600 dark:text-neutral-400 border-neutral-100 text-sm text-center">
        Copyright(C) 2024 fmawo.com All Rights Reserved.
      </span>
    </footer>
  );
}
