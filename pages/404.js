import React from "react";
import { useRouter } from "next/router";
import appConfig from "../config.json";
import { Box, Button, Text, TextField, Image } from "@skynexui/components";

export default function PageNotFound() {
  const roteamento = useRouter();

  return (
    <>
      <Box
        styleSheet={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: appConfig.theme.colors.primary["500"],
          backgroundImage:
            "url(https://th.bing.com/th/id/R.28c748889e8d70a00c85eca5679fca90?rik=rjcyIjWRXXC0Wg&pid=ImgRaw&r=0)",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
          backgroundBlendMode: "multiply",
        }}
      >
        <Box
          styleSheet={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            flexDirection: {
              xs: "column",
              sm: "column",
            },
            width: "100%",
            maxWidth: "450px",
            borderRadius: "5px",
            padding: "32px",
            margin: "16px",
            boxShadow: "0 2px 10px 0 rgb(0 0 0 / 20%)",
            backgroundColor: appConfig.theme.colors.neutrals[700],
          }}
        >
          <Text
            variant="heading4"
            styleSheet={{
              marginBottom: "8px",
              color: appConfig.theme.colors.neutrals[100],
            }}
          >
            Página não encontrada!
          </Text>

          <Text
            variant="body3"
            styleSheet={{
              marginBottom: "32px",
              color: appConfig.theme.colors.neutrals[300],
            }}
          >
            tente voltar para a tela inicial!
          </Text>

          <Button
            iconName="arrowLeft"
            label="Voltar"
            onClick={function (event) {
              event.preventDefault();
              roteamento.push("/");
              // Envia de volta para a Home
            }}
            fullWidth
            buttonColors={{
              contrastColor: appConfig.theme.colors.neutrals["000"],
              mainColor: appConfig.theme.colors.error[500],
              mainColorLight: appConfig.theme.colors.error[400],
              mainColorStrong: appConfig.theme.colors.error[600],
            }}
          />
        </Box>
      </Box>
    </>
  );
}
