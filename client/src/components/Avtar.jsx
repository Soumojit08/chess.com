import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { notionistsNeutral } from "@dicebear/collection";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";

const Avtar = () => {
  const user = useSelector((state) => state.auth.user);
  const [userName, setUsername] = useState(user.fullName);

  const getRandomPastel = () => {
    const palette = ["b6e3f4", "c0aede", "d1d4f9", "ffd5dc", "ffdfbf"];
    const color = palette[Math.floor(Math.random() * palette.length)];
    return color;
  };

  const [avtarColor, setAvtarColor] = useState("");

  useEffect(() => {
    setAvtarColor(getRandomPastel());
  }, []);

  const avatar = useMemo(() => {
    return createAvatar(notionistsNeutral, {
      seed: userName,
      size: 96,
      flip: false,
      scale: 100,
      radius: 50,
      backgroundColor: [avtarColor],
      backgroundType: ["gradientLinear", "solid"],
    }).toDataUri();
  }, [userName, avtarColor]);
  return <img src={avatar} alt="avatar" />;
};

export default Avtar;
