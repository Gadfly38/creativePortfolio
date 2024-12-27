import React from "react";
import styled from "styled-components";

const Card = ({ img }) => {
  return (
    <StyledWrapper>
      <div className="card_container !bg-none w-full">
        <div className="card_hover !bg-none">
          <div className="part part-1" />
          <div className="part part-2" />
          <div className="part part-3" />
          <div className="part part-4" />
          <div className="part part-5" />
          <div className="part part-6" />
          <div className="part part-7" />
          <div className="part part-8" />
          <div className="part part-9" />
          <div className="part part-10" />
          <div className="part part-11" />
          <div className="part part-12" />
          <div className="part part-13" />
          <div className="part part-14" />
          <div className="part part-15" />
        </div>
        <div className="card !bg-none !w-full !h-full !p-0 flex">
          <div className="flex flex-col w-full">
            <img src={img} />
            <div className="flex flex-col text-white">
              <p className="text-[16px]">Programmer</p>
              <p className="text-[24px]">Leslie Alexander</p>
            </div>
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  .card_container {
    --X: 0deg;
    --Y: 0deg;
    --Z: 0deg;
    --angleX: 40deg;
    --angleY: 30deg;
    --angleZ: 40deg;

    cursor: pointer;

    position: relative;
  }

  .card_hover {
    position: absolute;
    z-index: 10;
    top: 0;
    left: 0;

    display: flex;
    flex-wrap: wrap;

    width: 100%;
    height: 100%;
  }

  .card_hover .part {
    width: 20%;
    height: calc(100% / 3);
    background-color: transparent;
  }

  .card_container:has(.part-1:hover) {
    --X: var(--angleX);
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-2:hover) {
    --X: var(--angleX);
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-3:hover) {
    --X: var(--angleX);
  }
  .card_container:has(.part-4:hover) {
    --X: var(--angleX);
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-5:hover) {
    --X: var(--angleX);
    --Y: var(--angleY);
  }
  .card_container:has(.part-6:hover) {
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-7:hover) {
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-9:hover) {
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-10:hover) {
    --Y: var(--angleY);
  }
  .card_container:has(.part-11:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc(var(--angleY) * -1);
  }
  .card_container:has(.part-12:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc((var(--angleY) / 2) * -1);
  }
  .card_container:has(.part-13:hover) {
    --X: calc(var(--angleX) * -1);
  }
  .card_container:has(.part-14:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: calc(var(--angleY) / 2);
  }
  .card_container:has(.part-15:hover) {
    --X: calc(var(--angleX) * -1);
    --Y: var(--angleY);
  }

  .card {
    position: relative;

    display: flex;
    flex-direction: column;
    gap: 0.75rem;

    padding: 1.5rem;
    width: 15rem;
    background-image: linear-gradient(
      135deg,
      rgba(172, 250, 233, 1) 0%,
      rgba(213, 143, 235, 1) 50%,
      rgba(242, 126, 241, 1) 100%
    );

    border-radius: 0.5rem;

    transform-origin: center;
    transform: rotateX(var(--X)) rotateY(var(--Y)) rotateZ(var(--Z));
    transition: transform 0.3s ease-in-out;
  }

  .say-hi {
    position: relative;

    width: 100%;
    height: 2rem;
    background-color: transparent;
  }

  .icon_say-hi {
    position: absolute;
    bottom: 0;
    left: -0.5rem;

    width: 3rem;

    opacity: 0;
    transform-origin: 60% 90%;
    transform: translate(-15deg);
    filter: drop-shadow(0 0 0.5rem #2b2b2b);
    transition: all 0.2s ease-in-out;
  }

  .card_container:hover .card .icon_say-hi {
    width: 3.5rem;

    opacity: 1;
    animation: say-hi 0.35s linear infinite alternate;
  }

  @keyframes say-hi {
    to {
      transform: rotate(25deg);
    }
  }

  .title {
    overflow: clip;

    width: 100%;

    font-size: 1rem;
    font-weight: 600;
    color: var(--dark);
    text-transform: capitalize;
    text-wrap: nowrap;
    text-overflow: ellipsis;
  }

  .paragraph {
    font-size: 0.5rem;
    font-weight: 600;
    color: var(--dark);
  }
`;

export default Card;
