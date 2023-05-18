"use client";

import { Box, Button, Center, Heading, VStack } from "@chakra-ui/react";
import { FcGoogle } from "react-icons/fc";

import { signIn, getProviders } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

const Login = () => {
  const [providers, setProviders] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const setupProviders = async () => {
      const res = await getProviders();
      setProviders(res);
    };

    setupProviders();
  }, []);

  return (
    <Center
      sx={{
        width: "100%",
        height: "100vh",
        bgColor: "#fafafa",
      }}
    >
      <VStack spacing={5}>
        <Image
          src="/assets/logo.png"
          width={150}
          height={50}
          alt="realty logo"
        />
        {Object.values(providers).map((provider) => (
          <Button
            key={provider.name}
            size="lg"
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              color: "black",
              bgColor: "white",
              px: 3,
              py: 2,
            }}
            leftIcon={<FcGoogle />}
            onClick={() => {
              signIn(provider.id);
              router.push("/");
            }}
          >
            Sign in with google
          </Button>
        ))}
      </VStack>
    </Center>
  );
};

export default Login;
