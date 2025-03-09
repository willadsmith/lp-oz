import {Container, Heading, Html, Text} from "@react-email/components";

export const templateLetter = (question) => {
   return <Html lang="ru">
        <Container>
            <Heading className="text-center">Вопрос клиента с сайта:</Heading>

            <Container className="bg-gray-400">
                <Text className="px-[12px] text-white">
                    {question}
                </Text>
            </Container>
        </Container>
    </Html>
}