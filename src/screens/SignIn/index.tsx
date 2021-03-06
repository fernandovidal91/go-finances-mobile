import React, { useContext } from "react";
import { Alert } from "react-native";
import { RFValue } from "react-native-responsive-fontsize";

import AppleSVG from '../../assets/apple.svg';
import GoogleSVG from '../../assets/google.svg';
import LogoSVG from '../../assets/logo.svg';
import { SignInSocialButton } from "../../components/SignInSocialButton";
import { useAuth } from "../../hooks/auth";

import {
  Container,
  Header,
  TitleWeapper,
  Title,
  SignInTitle,
  Footer,
  FooterWrapper,
} from "./styles";

export function SignIn() {
  const { signInWithGoogle, user } = useAuth();

  console.log(user)

  async function handleSignInWithGoogle() {
    try {
      await signInWithGoogle();
    } catch (error) {
      console.log(error);
      return Alert.alert('Não foi possível se conectar a conta Google.');
    }
  }

  return (
    <Container>
      <Header>
        <TitleWeapper>
          <LogoSVG
            width={RFValue(120)}
            height={RFValue(68)}
          />

          <Title>
            Controle suas{'\n'}
            finanças de forma{'\n'}
            muito simples{'\n'}
          </Title>
        </TitleWeapper>

        <SignInTitle>
          Faça seu login com{'\n'}
          uma das contas
        </SignInTitle>
      </Header>

      <Footer>
        <FooterWrapper>
          <SignInSocialButton
            title="Entrar com Google"
            svg={GoogleSVG}
            onPress={handleSignInWithGoogle}
          />
          <SignInSocialButton
            title="Entrar com Apple"
            svg={AppleSVG}
          />
        </FooterWrapper>
      </Footer>
    </Container>
  );
}
