import { createPortal } from "react-dom";
import { useTransition, animated } from "react-spring";
import { Size } from "../../interface";
import { useActionStore } from "../../store";
import { cn } from "../../util";
import { useEffect, useState } from "react";
import SVG from "../../asset/SVG";
import { LineBreaks } from "../../text";
import { ModalProps } from "../../interface/Modal";

const widthSize = {
  xs: "w-2/3 min-w-76 max-w-176",
  sm: "w-2/3 min-w-76 max-w-176",
  md: "w-104.5 sm:w-112.5",
  lg: "w-full min-w-76 max-w-240",
  xl: "w-2/3 min-w-76 max-w-360",
  "2xl": "w-2/3 min-w-76 max-w-360",
  full: "w-full",
} as Record<Size, string>;
const heightSize = {
  xs: "",
  sm: "h-100",
  md: "h-72 sm:h-48",
  lg: "h-112.5",
  xl: "h-160",
  "2xl": "max-w-176",
  full: "h-full",
} as Record<Size, string>;

export default function ModalProvider(props: ModalProps) {
  const { isVisible } = props.showAction ?? {};
  const { position, noBackground } = props.option ?? {};
  const [detection, setDetection] = useState<Element | null>(null);
  const { setIsOwn } = useActionStore();
  useEffect(() => {
    setDetection(document.getElementById("portal"));
  }, []);
  const transitions = useTransition(isVisible, {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
    config: { duration: 200 },
  });
  const background = {
    positions: "z-50 fixed top-0 left-0",
    displays: !position && "flex items-center justify-center ",
    sizes: "min-h-screen w-full ",
    styles: !noBackground && "bg-black/10 backdrop-blur-sm ",
  };
  const positionContainer = {
    positions: "absolute z-45",
    position,
  };
  return (
    detection &&
    (!position
      ? createPortal(
          transitions(
            (styles, item) =>
              item && (
                <animated.div
                  style={styles}
                  className={cn(background)}
                  onClick={() => setIsOwn(true)}
                >
                  <ModalDesign {...props} />
                </animated.div>
              )
          ),
          document.body
        )
      : transitions(
          (styles, item) =>
            item && (
              <animated.div
                style={styles}
                className={cn(positionContainer)}
                onClick={() => setIsOwn(true)}
              >
                <ModalDesign {...props} />
              </animated.div>
            )
        ))
  );
}

function ModalDesign({ titles, showAction, children, option }: ModalProps) {
  const { removeModal } = useActionStore();
  const { width, height, noClose, boundary, position } = option ?? {};
  const { event } = showAction ?? {};
  const container = {
    paddings: "p-5 md:p-5",
    sizes: `${heightSize[height ?? "md"]} ${widthSize[width ?? "md"]}`,
    styles: "rounded-xl bg-white relative overflow-hidden",
    shadows: !!position && (boundary ?? "box-shadow"),
  };
  const titleBox = {
    displays: "flex flex-col",
    sizes: "w-full min-h-[83px]",
  };
  return (
    <div className={cn(container)}>
      <div className={cn(titleBox)}>
        <div className="text-xl leading-none font-pretendard-bold">
          {titles.title}
        </div>
        <LineBreaks
          texts={titles.subtitle}
          className="mt-3.5 text-base leading-none"
        />
      </div>
      <div className="overflow-hidden">{children}</div>
      {!noClose && event && (
        <SVG.Close
          onClick={() => removeModal(event)}
          className="absolute top-2.5 right-2.5 md:top-5 md:right-5"
        />
      )}
    </div>
  );
}
