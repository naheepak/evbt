import Cover1 from "@/static/images/02/1/IMG_6579 cover.webp";
import Cover2 from "@/static/images/02/2/IMG_2860 cover.webp";
import Cover3 from "@/static/images/02/3/IMG_3224 cover.webp";
import Cover4 from "@/static/images/02/4/PTG_POSTER_japan cover.webp";
import { CoverImage } from "@/interfaces";
import HiddenCover1 from "@/static/images/00/1/02-88.webp";

export const COVER_IMAGE_LIST: CoverImage[] = [
  {
    src: Cover1,
    id: "1",
    hiddenSrc: HiddenCover1,
    disabled: true,
  },
  {
    src: Cover2,
    id: "2",
    hiddenSrc: HiddenCover1,
    disabled: true,
  },
  {
    src: Cover3,
    id: "3",
    hiddenSrc: HiddenCover1,
  },
  {
    src: Cover4,
    id: "4",
    hiddenSrc: HiddenCover1,
    disabled: true,
  },
];
