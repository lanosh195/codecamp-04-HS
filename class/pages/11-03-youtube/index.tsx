import ReactPlayer from "react-player/youtube";
import styled from "@emotion/styled";

const MyYuotube = styled(ReactPlayer)`
  border: 10px solid yellow;
`;
export default function LibraryYoutubePage() {
  return (
    <MyYuotube
      url="https://https://www.youtube.com/watch?v=VoNhIx-roLQ&list=RDVoNhIx-roLQ&start_radio=1"
      width={500}
      hegith={500}
    />
  );
}
