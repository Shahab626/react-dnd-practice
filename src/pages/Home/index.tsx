import { useState } from "react";
import {
  Heading1,
  MainContainer,
  TextContainerWrapper,
  Wrapper,
} from "./index.styled";
import { ListItem } from "../../components/ListItem";
import { useDrop } from "react-dnd";

export const Home = () => {
  const [container1, setContainer1] = useState([
    { id: 1, name: "Shahab" },
    { id: 2, name: "Ali" },
    { id: 3, name: "Usman" },
    { id: 4, name: "Attiq" },
    { id: 5, name: "Azhar" },
  ]);

  const [container2, setContainer2] = useState<{ id: number; name: string }[]>(
    []
  );

  const [{ isOver }, addToContainer2Ref] = useDrop({
    accept: "container1",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const [{ isOver: isContainer1Over }, removeFromContainer2Ref] = useDrop({
    accept: "container2",
    collect: (monitor) => ({ isOver: !!monitor.isOver() }),
  });

  const moveDataToContainer2 = (item: { id: number; name: string }) => {
    setContainer1((prev) => prev.filter((data) => data.id !== item.id));
    setContainer2((prev) => [...prev, item]);
  };

  const moveDataToContainer1 = (item: { id: number; name: string }) => {
    setContainer2((prev) => prev.filter((data) => data.id !== item.id));
    setContainer1((prev) => [...prev, item]);
  };

  const handleSave = () => {
    console.debug({ container1, container2 });
  };
  return (
    <MainContainer>
      <button onClick={handleSave}>Save</button>
      <TextContainerWrapper>
        <Heading1>Container 1</Heading1>
        <Wrapper
          ref={removeFromContainer2Ref}
          $isOver={isContainer1Over}
          $containerType={"container1"}
        >
          {container1.map((data) => (
            <ListItem
              key={data.id}
              item={data}
              type="container1"
              // index={data.id}
              OnDropItem={moveDataToContainer2}
            />
          ))}
        </Wrapper>
      </TextContainerWrapper>
      <TextContainerWrapper>
        <Heading1>Container 2</Heading1>
        <Wrapper
          ref={addToContainer2Ref}
          $containerType={"container2"}
          $isOver={isOver}
        >
          {container2.map((data) => (
            <ListItem
              key={data.id}
              item={data}
              type="container2"
              // index={data.id}
              OnDropItem={moveDataToContainer1}
            />
          ))}
        </Wrapper>
      </TextContainerWrapper>
    </MainContainer>
  );
};
