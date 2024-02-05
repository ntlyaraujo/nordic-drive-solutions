import { MouseEventHandler } from "react";

type NavTabItemProps = {
  index: number;
  label: string;
  load: number;
  activeTab: string;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export const NavTabItem = ({
  index,
  label,
  load,
  activeTab,
  onClick,
}: NavTabItemProps) => {
  return (
    <button
      id={`tab-${index}`}
      type="button"
      role="tab"
      aria-selected={activeTab === `tab-${index}` ? "true" : "false"}
      aria-controls={`tabpanel-${index}`}
      className="px-8 tap-area"
      tabIndex={activeTab === `tab-${index}` ? 0 : -1}
      onClick={onClick}
    >
      <div className="flex items-center h-48 border-b-2 border-transparent tab-selected:border-primary transition-colors text-secondary uppercase">
        {`${label} (${load})`}
      </div>
    </button>
  );
};
