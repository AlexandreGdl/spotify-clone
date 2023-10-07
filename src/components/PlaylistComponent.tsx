import styled from 'styled-components';
import { Column, Row } from './common';
import { SpotifyPlaylistItem } from 'types/api/SpotifyPlaylistItem';

const PlaylistImage = styled('img')`
  width: 46px;
  height: 46px;
  border-radius: 4px;
`;
const PlaylistButton = styled('button')`
  border: none;
  background-color: transparent;
  border-radius: 6px;
  cursor: pointer;
  padding: 8px;
  color: #FFF;
  width: 100%;
  display: flex;
  align-items: center;

  &:hover {
    background-color: #242424;
  }

  transition: all .2s;
`;

type TextProps = {secondary?: boolean};
const Text = styled('p').withConfig({
  shouldForwardProp: (prop) => !['secondary'].includes(prop)
})<TextProps>`
  font-size: ${({secondary}) => secondary ? '1em' : '1.1em'};
  font-weight: ${({secondary}) => secondary ? '400' : '700'};
  color: ${({theme, secondary}) => secondary ? theme.text.secondary : theme.text.main};
  text-align: left;
`;

export type PlaylistComponentProps = {
  item: SpotifyPlaylistItem;
}

export const PlaylistComponent = ({item}: PlaylistComponentProps) => {
  return (
    <PlaylistButton onClick={() => window.location.href = item.external_urls.spotify}>
      <Row gap="10px">
        <PlaylistImage {...item.images[0]} />
        <Column justifyContent='space-between'>
          <Text>{item.name}</Text>
          <Text secondary>{item.owner.display_name}</Text>
        </Column>
      </Row>
    </PlaylistButton>
  )
}