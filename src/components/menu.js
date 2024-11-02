"use client"; // Add this directive at the top of the file

import { useState } from "react";
import { role } from "@/lib/data";
import Image from "next/image";
import Link from "next/link";
import * as FcIcons from 'react-icons/fc';

const menuItems = [
  {
    title: "MENU",
    items: [
      {
        icon: <FcIcons.FcHome size={24}/>, 
        label: "Home",
        href: "/admin",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon: <FcIcons.FcBusinesswoman size={24} />,
        label: "Teachers",
        href: "/list/teachers",
        visible: ["admin", "teacher"],
      },
      {
        icon: <FcIcons.FcGraduationCap size={24} />,
        label: "Students",
        href: "#",
        visible: ["admin", "teacher"],
        subItems: [
          { label: "Add Student", href: "/student", visible: ["admin", "teacher"] },
          { label: "Edit Student", href: "/students/edit", visible: ["admin", "teacher"] },
          { label: "About Student", href: "/students/about", visible: ["admin", "teacher"] },
          { label: "All Students", href: "/students", visible: ["admin", "teacher", "student"] },
        ],
      },
      {
        icon:  <FcIcons.FcContacts size={24} />,
        label: "Parents",
        href: "/list/parents",
        visible: ["admin", "teacher"],
      },
      {
        icon:  <FcIcons.FcConferenceCall  size={24} />,
        label: "Subjects",
        href: "/list/subjects",
        visible: ["admin"],
      },
      {
        icon:  <FcIcons.FcManager size={24} />,
        label: "Classes",
        href: "/list/classes",
        visible: ["admin", "teacher"],
      },
      {
        icon:  <FcIcons.FcEditImage  size={24} />,
        label: "Lessons",
        href: "/list/lessons",
        visible: ["admin", "teacher"],
      },
      {
        icon:  <FcIcons.FcDocument size={24} />,
        label: "Exams",
        href: "/list/exams",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcApproval  size={24} />,
        label: "Assignments",
        href: "/list/assignments",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcBriefcase  size={24} />,
        label: "Results",
        href: "/list/results",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcCustomerSupport  size={24} />,
        label: "Attendance",
        href: "/list/attendance",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcCollaboration  size={24} />,
        label: "Events",
        href: "/list/events",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcInvite  size={24} />,
        label: "Messages",
        href: "/list/messages",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcContacts size={24} />,
        label: "Announcements",
        href: "/list/announcements",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
  {
    title: "OTHER",
    items: [
      {
        icon:  <FcIcons.FcContacts size={24} />,
        label: "Profile",
        href: "/profile",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcSettings  size={24} />,
        label: "Settings",
        href: "/settings",
        visible: ["admin", "teacher", "student", "parent"],
      },
      {
        icon:  <FcIcons.FcContacts size={24} />,
        label: "Logout",
        href: "/logout",
        visible: ["admin", "teacher", "student", "parent"],
      },
    ],
  },
];

const Menu = () => {
  return (
    <div className="mt-4 text-sm">
      {menuItems.map((menu) => (
        <div className="flex flex-col gap-2" key={menu.title}>
          <span className="hidden lg:block text-gray-400 font-light my-4">
            {menu.title}
          </span>
          {menu.items.map((item) => {
            if (item.visible.includes(role)) {
              // State for handling the dropdown
              const [isOpen, setIsOpen] = useState(false);

              // Function to toggle the dropdown
              const toggleDropdown = () => {
                if (item.subItems) {
                  setIsOpen(!isOpen);
                }
              };

              return (
                <div key={item.label}>
                  <Link
                    href={item.href}
                    onClick={toggleDropdown}
                    className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-2 md:px-2 rounded-md hover:bg-lamaSkyLight"
                  >
                    {item.icon}
                    <span className="hidden lg:block">{item.label}</span>
                  </Link>
                  {item.subItems && isOpen && (
                    <div className="ml-6 mt-1 flex flex-col gap-2">
                      {item.subItems.map((subItem) => {
                        if (subItem.visible.includes(role)) {
                          return (
                            <Link
                              href={subItem.href}
                              key={subItem.label}
                              className="flex items-center justify-center lg:justify-start gap-4 text-gray-500 py-1 md:px-2 rounded-md hover:bg-lamaSkyLight"
                            >
                              <span className="hidden lg:block">{subItem.label}</span>
                            </Link>
                          );
                        }
                        return null; // Return null if the sub-item is not visible
                      })}
                    </div>
                  )}
                </div>
              );
            }
            return null; // Return null if the item is not visible
          })}
        </div>
      ))}
    </div>
  );
};

export default Menu;