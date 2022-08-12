import React from "react";
import { Button, Dropdown, Label, Textarea } from "flowbite-react";

const Home = () => {
  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <div className="flex justify-center items-center mx-auto gap-2">
        <div>
          <Dropdown label="From: ">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
        <div>
          <Dropdown label="To: ">
            <Dropdown.Item>Dashboard</Dropdown.Item>
            <Dropdown.Item>Settings</Dropdown.Item>
            <Dropdown.Item>Earnings</Dropdown.Item>
            <Dropdown.Item>Sign out</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="p-2">
        <div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Enter your text"
              required={true}
              rows={4}
            />
          </div>
        </div>
        <div>
          <div id="textarea">
            <div className="mb-2 block">
              <Label htmlFor="comment" />
            </div>
            <Textarea
              id="comment"
              placeholder="Translated text"
              required={true}
              rows={4}
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto p-4">
        <Button>Translate</Button>
      </div>
    </div>
  );
};

export default Home;
