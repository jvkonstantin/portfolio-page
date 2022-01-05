import { Popover } from "@headlessui/react";
import { MenuIcon } from "@heroicons/react/solid";
export default function PopMe() {
  return (
    <Popover className="relative">
      <Popover.Button>
        <MenuIcon className="w-10 text-right " />
      </Popover.Button>
      <Popover.Panel className="absolute z-10 backdrop-blur-lg">
        <div className="flex flex-col">
          <a href="/analytics">Analytics</a>
          <a href="/engagement">Engagement</a>
          <a href="/security">Security</a>
          <a href="/integrations">Integrations</a>
        </div>
        <img src="/hat.png" alt="" />
      </Popover.Panel>
    </Popover>
  );
}
