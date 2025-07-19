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
      {/* Buttons with various sizes and shapes */}
      <div className="flex flex-wrap gap-4 mt-8">
        <Button title="Small Button" styles="text-sm px-2 py-1 rounded-sm" />
        <Button title="Medium Button" styles="text-sm px-4 py-2 rounded-md" />
        <Button title="Large Button" styles="text-lg px-6 py-3 rounded-lg" />
      </div>
    </div>
  )
}
export default Landing;
