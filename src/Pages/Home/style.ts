import styled from "styled-components";

export const Container = styled.div``;

export const HeaderBox = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    box-shadow: 0px 3px 5px 0px rgb(50 50 50 / 35%);
    padding: 10px;
`;

export const IconLogo = styled.img`
    width: 80px;
`;

export const HeaderContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    width: 100%;
    &:last-child{
        justify-content: flex-end;
    }
`;

export const AppName = styled.p`
    color: #F89B40;
    margin-left: 10px;
    font-weight: bold;
    font-size: 25px;
`;

export const ChangeLang = styled.a`
    text-decoration: underline;
    color: #444;
    font-size: 18px;
`;

export const HeaderMContent = styled.div`
    display: flex;
    flex-direction: row;
    width: 98%;
`;

export const BodyPage = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BigText = styled.p`
    font-size: 40px;
    color: #F89B40;
    margin-top: 80px;
`;

export const SmallText = styled.p`
    color: #444;
    font-size: 25px;
    margin-top: 5px;
    letter-spacing: 5px;
`;