import styled from 'styled-components';

export const Wrapper = styled.div`
  position: fixed;
  top: 25%;
  right: -50vw;
  width: 50vw;
  padding: 40px;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(-50vw)' : 'translateX(0)')};
  transition: 0.4s;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 10px 0 0 10px;
  z-index: 99;

  @media (max-width: 1024px) {
    right: -70vw;
    width: 70vw;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(-70vw)' : 'translateX(0)')};
  }

  @media (max-width: 550px) {
    right: -90vw;
    width: 90vw;
    transform: ${({ isOpen }) => (isOpen ? 'translateX(-90vw)' : 'translateX(0)')};
  }
`;

export const OpenCloseButton = styled.button`
  position: absolute;
  left: -30px;
  width: 30px;
  height: 30px;
  transform: ${({ isOpen }) => (isOpen ? 'rotateY(-180deg)' : 'rotateY(0)')};
  transition: 0.4s;
  background-color: ${({ theme }) => theme.colors.white};
  border: 1px solid ${({ theme }) => theme.colors.blue};
`;

export const MovieWrapper = styled.div`
  display: grid;
  grid-template-columns: 2fr 3fr 1fr;
  align-items: center;
  margin-bottom: 5px;
  padding: 10px 0;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray};
`;

export const RemoveButton = styled.button`
  grid-column: 3 / -1;
`;
