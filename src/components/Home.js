import React from "react";
import { Button, Dropdown, Label, Textarea } from "flowbite-react";
import { useState, useEffect } from "react";

const axios = require('axios').default;

const Home = () => {
  const [options, setOptions] = useState([]);
  const [to, setTo] = useState('en');
  const [from, setFrom] = useState('en');
  const [input, setInput] = useState('');
  const [output, setOutput] = useState('');


  const translate = () => {
    // curl -X POST "https://libretranslate.de/translate" -H  "accept: application/json" -H  "Content-Type: application/x-www-form-urlencoded" -d "q=hello&source=en&target=es&api_key=xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx"
   
    const params = new URLSearchParams();
    params.append('q', input);
    params.append('source', from);
    params.append('target', to);
    params.append('api_key', 'xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx');

    axios.post('https://libretranslate.de/translate',params, {
      headers: {
        'accept': 'application/json',
        'Content-Type': 'application/x-www-form-urlencoded',
      },
    }).then(res=>{
      console.log(res.data)
      setOutput(res.data.translatedText)
    })
  };


  useEffect(() => {
    axios
      .get('https://libretranslate.de/languages', {
        headers: { accept: 'application/json' },
      })
      .then((res) => {
        console.log(res.data);
        setOptions(res.data);
      });
  }, []);

  return (
    <div className="mx-auto max-w-screen-xl mt-10">
      <div className="flex justify-center items-center mx-auto gap-2">
        <div className="flex gap-2">
          From:
          <select onChange={(e) => setFrom(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
        </select>
        </div>
        <div className="flex gap-2">
          To:
          <select onChange={(e) => setTo(e.target.value)}>
          {options.map((opt) => (
            <option key={opt.code} value={opt.code}>
              {opt.name}
            </option>
          ))}
            </select>
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
              onInput={(e) => setInput(e.target.value)}
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
              value={output}
              readOnly
            />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center mx-auto p-4">
        <Button onClick={e=>translate()}>Translate</Button>
      </div>
    </div>
  );
};

export default Home;
