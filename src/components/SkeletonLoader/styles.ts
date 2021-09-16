import styled from 'styled-components'

export const Content = styled.div`
  width: 30.4rem;
  height: 27.9rem;
  background: #f6f7f8;
  background-image: linear-gradient(
    to right,
    #f6f7f8 0%,
    #edeef1 20%,
    #f6f7f8 40%,
    #f6f7f8 100%
  );
  animation: skeletonLoaderAnimation 1s linear infinite forwards;

  @keyframes skeletonLoaderAnimation {
    0% {
      background-position: -40rem 0;
    }

    100% {
      background-position: 40rem 0;
    }
  }
`
