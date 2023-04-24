import styled from '@emotion/styled';
import bgdtop from '../../image/bgdtop.png';

export const Container = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 460px;
  z-index: 1;
  border-radius: 20px;
  background: linear-gradient(
    114.99deg,
    #471ca9 -0.99%,
    #5736a3 54.28%,
    #4b2a99 78.99%
  );
  box-shadow: -2.5777px;
`;

export const TopContainer = styled.div`
  background-image: url(${bgdtop});
  background-repeat: no-repeat;
  background-position: center;
  background-size: 308px 168px;
  width: 380px;
  height: 214px;
  padding: 20px 0;
`;

export const LogoHead = styled.img`
  width: 76px;
  height: 22px;
  margin-left: 20px;
`;

export const Avatar = styled.div`
  background-image: url('${props => props.avatar}');
  background-size: cover;
  background-repeat: no-repeat;
  width: 62px;
  height: 62px;
  border-radius: 50%;
`;

export const AvatarContainer = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 100;
  left: '50%';
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background-color: #ebd8ff;
  box-shadow: 0px 4.39163px 4.39163px rgba(0, 0, 0, 0.06),
    inset 0px -2.19582px 4.39163px #ae7be3,
    inset 0px 4.39163px 3.29372px #fbf8ff;
`;

export const Border = styled.div`
  position: relative;
  width: 100%;
  height: 8px;
  background-color: #ebd8ff;
  box-shadow: 0px 3.43693px 3.43693px rgba(0, 0, 0, 0.06),
    inset 0px -1.71846px 3.43693px #ae7be3, inset 0px 3.43693px 2.5777px #fbf8ff;
`;

export const BottomContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0;
  margin: 0;
  height: 238px;
`;

export const InfoText = styled.p`
  font-weight: 500;
  font-size: 20px;
  line-height: 1.2;
  text-transform: uppercase;

  color: #ebd8ff;
`;
