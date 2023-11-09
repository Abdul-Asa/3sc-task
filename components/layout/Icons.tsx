import { cn } from "@/utils/utils";
import { IconProps } from "./Logo";

export const PlusIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="23"
      height="23"
      viewBox="0 0 23 23"
      fill="none"
      className={cn(className)}
    >
      <g clipPath="url(#clip0_4535_2580)">
        <path
          d="M12.935 10.065V0H10.065V10.065H0V12.935H10.065V23H12.935V12.935H23V10.065H12.935Z"
          fill="#F8F8F8"
        />
      </g>
      <defs>
        <clipPath id="clip0_4535_2580">
          <rect width="23" height="23" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
};

export const InboxIcon: React.FC<IconProps> = ({ className }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="27"
      height="27"
      viewBox="0 0 27 27"
      fill="none"
      className={cn(className)}
    >
      <path
        d="M26.8202 11.762L23.8535 5.76865C23.3441 4.71981 22.2952 4.06055 21.0966 4.06055H5.87347C4.67481 4.06055 3.65594 4.68985 3.11654 5.76865L0.149834 11.732C0.0599334 11.9118 0 12.1216 0 12.3014V20.3624C0 21.7709 1.13873 22.9396 2.57714 22.9396H24.4229C25.8313 22.9396 27 21.8008 27 20.3624V12.3314C26.97 12.1216 26.9101 11.9118 26.8202 11.762ZM18.6992 11.0428C18.0999 11.0428 17.5905 11.4623 17.4406 12.0617C17.4107 12.1815 16.7214 15.388 13.455 15.388C10.2786 15.388 9.55938 12.4213 9.46948 12.0617C9.34961 11.4623 8.84018 11.0428 8.21088 11.0428H3.35627L5.42397 6.90738C5.51387 6.75755 5.69367 6.60772 5.87347 6.60772H21.0966C21.2764 6.60772 21.4562 6.69762 21.5461 6.90738L23.5838 11.0428H18.6992Z"
        fill="#F8F8F8"
      />
    </svg>
  );
};
