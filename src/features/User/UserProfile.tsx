import { IconLoader } from "@tabler/icons-react";
import { useSpotifyUser } from "hooks";
import styled from 'styled-components';

const RoundImage = styled('img')`
  border-radius: 50px;
  width: 24px;
  height: 24px;
`;

export const UserIcon = () => {
  const {data} = useSpotifyUser();
  if (!data) return <IconLoader size={20} />
  return (
    <RoundImage {...data.images[0]} />
  )
}