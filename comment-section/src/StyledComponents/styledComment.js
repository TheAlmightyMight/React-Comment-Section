import styled from "styled-components";
import reply from "../images/icon-reply.svg";

export const Container = styled.div`
  background-color: hsl(0, 0%, 100%);
  border-radius: 10px;
  width: 100%;
  min-height: 150px;
  margin-bottom: 20px;
  display: grid;
  grid-template-columns: 60px 1fr;
  grid-template-rows: 50px minmax(100px, auto);
  grid-auto-rows: 120px;
`;

export const VotesContainer = styled.div`
  margin: auto;
  height: 100px;
  width: 40px;
  grid-column: 1/2;
  grid-row: 1/3;
`;

export const Votes = styled.div`
  background-color: hsl(223, 19%, 93%);
  overflow: hidden;
  height: 100px;
  width: 30px;
  border-radius: 5px;
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const VotesNumber = styled.span`
  font-weight: 700;
  margin: 0 auto;
  color: hsl(238, 40%, 52%);
`;

export const VoteBtn = styled.button`
  background-color: hsl(223, 19%, 93%);
  width: 30px;
  height: 25px;
  cursor: pointer;
`;

export const InfoContainer = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
  position: relative;
  grid-column: 2/3;
  grid-row: 1/2;

  &:nth-last-child() {
    margin-right: 0;
  }
`;

export const Picture = styled.img`
  width: 35px;
  aspect-ratio: 1;
  border-radius: 50%;
  margin-right: 10px;
`;

export const UserName = styled.p`
  font-weight: 700;
  color: hsl(212, 24%, 26%);
  margin-right: 10px;
`;

export const DateInfo = styled.p`
  font-weight: 400;
  color: hsl(211, 10%, 45%);
  margin-right: 10px;
`;

export const ContentContainer = styled.div`
  grid-column: 2/3;
  grid-row: 2/3;
`;

export const Content = styled.textarea`
  font-weight: 400;
  width: 710px;
  font-size: 1em;
  font-family: inherit;
  resize: none;
  height: 100%;
  background-color: hsl(0, 0%, 100%);
  color: hsl(211, 10%, 45%);
  margin-right: 30px;
`;

export const ReplyBtn = styled.button`
  background-color: hsl(0, 0%, 100%);
  width: 60px;
  height: 30px;
  position: absolute;
  right: 20px;
  cursor: pointer;

  &::after {
    content: "";
    width: 14px;
    height: 13px;
    background-image: url(${reply});
    background-repeat: no-repeat;
    position: absolute;
    top: 8px;
    right: 60px;
  }
`;

export const ReplyText = styled.span`
  font-size: 18px;
  font-weight: 700;
  color: hsl(238, 40%, 52%);
  width: 100%;
`;

export const DeleteBtn = styled.button`
  width: 60px;
  height: 30px;
  font-weight: 700;
  position: absolute;
  right: 85px;
  font-size: 1em;
  cursor: pointer;
  background: transparent;
  color: hsl(358, 79%, 66%);
`;

export const EditBtn = styled.button`
  width: 60px;
  height: 30px;
  font-weight: 700;
  position: absolute;
  right: 15px;
  font-size: 1em;
  cursor: pointer;
  background: transparent;
  color: hsl(238, 40%, 52%);
`;

export const UserIdentifier = styled.p`
  background: hsl(238, 40%, 52%);
  padding: 0.2em 0.4em;
  color: hsl(0, 0%, 100%);
`;

export const UpdateBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 20px;
  grid-column: 2/3;
  justify-self: end;
  color: hsl(0, 0%, 100%);
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  background-color: hsl(238, 40%, 52%);
`;

export const ContentContainerReply = styled.div`
  position: relative;
  justify-content: end;
  border-radius: 10px;
  padding: 1em;
  background-color: hsl(0, 0%, 100%);
  margin: 20px 0 40px 0;
  height: 150px;
  width: 800px;
  display: flex;
`;

export const ImageReply = styled.img`
  width: 50px;
  aspect-ratio: 1;
  border-radius: 50%;
  position: absolute;
  left: 30px;
`;

export const ReplyUpdateBtn = styled.button`
  width: 100px;
  height: 50px;
  margin: 0 20px 0 20px;
  color: hsl(0, 0%, 100%);
  font-size: 18px;
  cursor: pointer;
  font-weight: 500;
  border-radius: 10px;
  background-color: hsl(238, 40%, 52%);
`;
