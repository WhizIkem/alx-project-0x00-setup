/**
 * Landing page for the application.
 */

import React from "react";
import Card from "@/components/Card";
import Button from "@/components/Button";

const Landing: React.FC = () => {
  return (
    <div>
      <h1 className="text-xl font-extralight">Landing Page</h1>
      <Card />
      <Card />
      <Card />
      {/* Small Buttons */}
      <div className="flex flex-wrap gap-4 items-start mt-10">
        <Button title="Small" styles="text-sm px-3 py-1 rounded-sm" />
        <Button title="Medium" styles="text-base px-5 py-3 rounded-md" />
        <Button title="Large" styles="text-xl px-8 py-5 rounded-full" />
      </div>
    </div>
  )
}
export default Landing;
