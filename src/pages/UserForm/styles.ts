import styled from "styled-components";

interface FormDivProps {
    divWidth: string;
}

export const ContentContainer = styled.div`
    display: flex;
    width: 100vw;
    height: 100vh;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
`;

export const FormContainer = styled.div`
    width: 90%;
    max-width: 800px;
    height: auto;
    max-height: 700px;
    padding: 50px;
    background-color: var(--cinza);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-direction: column;

    @media(max-width: 700px){
        width: 90%;
    }
`;

export const FormRadioInputs = styled.input`
    width: 20px;
    height: 20px;
    margin-right: 5px;
`

export const FormSelectInputs = styled.select`
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    margin: 5px 0px;

    option{
        padding: 5px;
        border-radius: 0;
    }
`

export const FormInputs = styled.input`
    width: 100%;
    height: 40px;
    padding: 8px;
    border-radius: 5px;
    border: none;
    margin: 5px 0px;
`

export const FormLabel = styled.label`
    color: #FFF;
    margin-right: 10px;
`

export const FormSubtitle = styled.h3`
    color: #FFF;
    text-align: center;
    margin-bottom: 30px;
`

export const FormDiv = styled.div<FormDivProps>`
    display: flex;
    flex-direction: column;
    margin-right: 15px;
    width: ${props => props.divWidth};
    
    @media(max-width: 544px){
        width: 100%;
        margin-right: 0px;
    }
`

export const FormRow = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 10px;
    flex-wrap: wrap;

    div:last-child {
        margin-right: 0px;
    }
`

export const ButtonDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`

export const ActionBtn = styled.button`
    border: none;
    border-radius: 5px;
    padding: 10px;
    width: 40%;
    font-weight: bold;
    background-color: var(--green);
    text-align: center;
    color: #FFF;
    font-size: 1.2rem;
    margin-bottom: 10px;

    @media(max-width: 544px){
        width: 100%;
    }
`

export const BtnLegend = styled.p`
    color: #FFF;
`