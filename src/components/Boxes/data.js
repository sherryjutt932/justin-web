import demo from "../../assests/icons/demo.svg";
import request from "../../assests/icons/request.svg";
import designs from "../../assests/icons/designs.svg";
import revisions from "../../assests/icons/revisions.svg";

export default function data() {
    const icons = [
        {
          label: "Book a Demo",
          img: demo,
        },
        {
          label: "Subscribe & Request",
          img: request,
        },
        {
          label: "Get Your Designs",
          img: designs,
        },
        {
          label: "Unlimited Revisions",
          img: revisions,
        },
      ];

  return icons
}
