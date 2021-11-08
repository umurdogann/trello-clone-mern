import React from "react";
import styled from "styled-components";
import { md } from "../../BreakPoints";
import Background from "../Background";

const BgContainer = styled.div`
  display: initial;
  ${md({
    display: "none",
  })}
`;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  ${md({
    backgroundColor: "#F9FAFC",
  })}
`;
const TrelloIconContainer = styled.div`
  padding-top: 2.5rem;
  ${md({
    paddingTop: "1rem",
  })}
`;
const Icon = styled.img`
  display: block;
  height: 2.6rem;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 2.5rem;
  ${md({
    marginBottom: "1rem",
  })}
`;
const FormSection = styled.section`
  display: block;
  word-wrap: break-word;
`;
const FormCard = styled.div`
  box-sizing: border-box;
  display: block;
  max-width: 400px;
  width: fit-content;
  margin: 0 auto;
  position: relative;
  background-color: #ffffff;
  border-radius: 3px;
  padding: 1.5rem 2.5rem;
  box-shadow: rgb(0 0 0 / 10%) 0 0 10px;

  ${md({
    maxWidth: "100%",
    width: "100%",
    boxShadow: "none",
    backgroundColor: "#F9FAFC",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    padding: "0.5rem 1rem",
  })}
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 20rem;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  ${md({
    gap: "0.7rem",
  })}
`;
const Title = styled.h1`
  color: #5e6c84;
  font-size: 1rem;
  padding: 1rem;
`;
const Input = styled.input`
  width: 100%;
  outline: none;
  font-size: 0.85rem;
  border-radius: 0.2rem;
  padding: 0.6rem;
  border: 2px solid #dfe1e6;
  background-color: #fafbfc;
  &:focus {
    transition: background-color 0.2s ease-in-out 0s,
      border-color 0.2s ease-in-out 0s;
    border: 2px solid #68bcff;
  }
`;
const Button = styled.button`
  background-color: #5aac44;
  width: 100%;
  border-radius: 0.4rem;
  padding: 0.5rem 1rem;
  color: white;
  border: none;
  cursor: pointer;
  font-weight: bold;
  &:hover {
    background: linear-gradient(to bottom, #61bd4f 0%, #5aac44 100%);
  }
`;
const Hr = styled.hr`
  width: 100%;
  display: block;
  height: 1px;
  border: 0;
  border-top: 1px solid hsl(0, 0%, 80%);
  margin: 0.5 0;
  padding: 0;
`;
const Text = styled.p`
  font-size: 0.75rem;
  line-height: 1rem;
  color: #5e6c84;
`;
const Link = styled.a`
  text-decoration: none;
  color: #0052cc;
  cursor: pointer;
  font-size: ${props => props.fontSize};
  &:hover {
    color: #0052cc;
  }
`;

const Register = () => {
  return (
    <>
      <BgContainer>
        <Background />
      </BgContainer>
      <Container>
        <TrelloIconContainer>
          <Icon src="https://d2k1ftgv7pobq7.cloudfront.net/meta/c/p/res/images/trello-header-logos/167dc7b9900a5b241b15ba21f8037cf8/trello-logo-blue.svg" />
        </TrelloIconContainer>
        <FormSection>
          <FormCard>
            <Form>
              <Title>Sign up for your account</Title>
              <Input type="text" placeholder="Enter name" />
              <Input type="text" placeholder="Enter surname" />
              <Input type="email" placeholder="Enter email" />
              <Input type="password" placeholder="Enter password" />
              <Input type="password" placeholder="Confirm password" />
              <Text>
                By signing up, you confirm that you've read and accepted our{" "}
                <Link fontSize="0.75rem">Terms of Service</Link> and <Link fontSize="0.75rem">Privacy Policy</Link>.
              </Text>
              <Button>Complete</Button>
              <Hr />
              <Link fontSize="0.85rem">Already have an account? Log In</Link>
            </Form>
          </FormCard>
        </FormSection>
      </Container>
    </>
  );
};

export default Register;
