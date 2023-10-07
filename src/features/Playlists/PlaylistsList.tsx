import { useSpotifyPLaylists } from "hooks"
import Skeleton from "react-loading-skeleton";
import styled from 'styled-components';
import { PlaylistItem } from "./PlaylistItem";

const ListContainer = styled('ul')`
  margin-top: 20px;
`;

const ItemSkeleton = styled(Skeleton)`
  margin: 10px 0;
  background-color: #242424;
`;

export const PlaylistsList = () => {
  const {data, status} = useSpotifyPLaylists();
  
  if (status === 'idle' || status === 'loading') {
    return (
      <ListContainer>
        {Array.from(Array(8)).map((_, key) => (
          <ItemSkeleton key={key} height={60} width="100%" />
        ))}
      </ListContainer>
    )
  }

  if (!data || status === 'error') {
    return (
      <p>Error</p>
    )
  }

  return (
    <ListContainer>
      {data.items.map((item) => (
        <li key={item.id}>
          <PlaylistItem item={item} />
        </li>
      ))}
    </ListContainer>
  )
}