"use client";

import { useState } from "react";
import { CheckIcon, CrossIcon } from "@/components/icons";
import { Card } from "@/components/common";
import { IApplicantDetails } from "@/types/applicants-types";

interface ToggleItemProps {
  label: string;
  isOn: boolean;
  onToggle: () => void;
}

function ToggleItem({ label, isOn, onToggle }: ToggleItemProps) {
  return (
    <div className="flex items-center gap-[20px]">
      <button
        onClick={onToggle}
        className={`relative w-[40px] h-[20px] rounded-full transition-colors duration-200 ${
          isOn ? "bg-blue-500" : "bg-gray-500"
        }`}
      >
        <div
          className={`absolute top-1/2 -translate-y-1/2 w-[15px] h-[15px] bg-white rounded-full transition-transform duration-200 flex items-center justify-center ${
            isOn ? "translate-x-[22px]" : "translate-x-1"
          }`}
        />

        {isOn ? (
          <div className="absolute left-1 top-1/2 -translate-y-1/2">
            <CheckIcon />
          </div>
        ) : (
          <div className="absolute right-1 top-1/2 -translate-y-1/2">
            <CrossIcon />
          </div>
        )}
      </button>
      <span className="text-white text-sm font-medium leading-6 font-roboto">
        {label}
      </span>
    </div>
  );
}

interface StatusToggleProps {
  openToWork: boolean;
  setOpenToWork: (openToWork: boolean) => void;
  openToProjects: boolean;
  setOpenToProjects: (openToProjects: boolean) => void;
}

export default function StatusToggle({ openToWork, setOpenToWork, openToProjects, setOpenToProjects }: StatusToggleProps) {

  return (
    <Card isSmall>
      <div className="flex flex-col gap-4">
        <ToggleItem
          label="Open to work"
          isOn={openToWork}
          onToggle={() => setOpenToWork(!openToWork)}
        />
        <ToggleItem
          label="Open to projects"
          isOn={openToProjects}
          onToggle={() => setOpenToProjects(!openToProjects)}
        />
      </div>
    </Card>
  );
}
