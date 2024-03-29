import Image from "next/image";
import Link from "next/link";
import { COVER_IMAGE_LIST } from "./contents/cover-image-list";
import { PAGE_URL } from "@/constants/url";
import classNames from "classnames";

export default function Home() {
  return (
    <main className="flex min-h-screen w-screen flex-col items-center">
      <ul className="grid grid-cols-1 md:grid-cols-4 gap-4 px-6 md:px-8 w-full">
        {COVER_IMAGE_LIST.map((image, index) => {
          return (
            <li key={index} className="w-full mb-4 lg:mb-0">
              <Link
                href={PAGE_URL.FIRST.DETAIL(image.id)}
                className={classNames({
                  "pointer-events-none": image.disabled,
                })}
                tabIndex={image.disabled ? -1 : undefined}
                aria-disabled={image.disabled}
              >
                <div className="w-full relative pb-[133%]">
                  <Image
                    src={image.src}
                    alt={`cover-${index}`}
                    fill
                    className={"object-cover z-10"}
                    placeholder={"blur"}
                  />
                </div>
              </Link>
            </li>
          );
        })}
      </ul>
    </main>
  );
}
