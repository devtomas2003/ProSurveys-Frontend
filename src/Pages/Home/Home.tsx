import {
    Container,
    HeaderBox,
    IconLogo,
    HeaderContent,
    AppName,
    ChangeLang,
    HeaderMContent,
    BodyPage,
    BigText,
    SmallText
} from "./style";
import ProSurveys from "../../favicon.ico";

export default function Home(){
    return (
        <Container>
            <HeaderBox>
                <HeaderMContent>
                    <HeaderContent>
                        <IconLogo title="Pro Surveys" src={ProSurveys} />
                        <AppName>Pro Surveys</AppName>
                    </HeaderContent>
                    <HeaderContent>
                        <ChangeLang>Alterar Idioma</ChangeLang>
                    </HeaderContent>
                </HeaderMContent>
            </HeaderBox>
            <BodyPage>
                <BigText>Bem-vindo ao Pro Surveys</BigText>
                <SmallText>Comece já a criar as suas pesquisas.</SmallText>
            </BodyPage>
        </Container>
    );
}