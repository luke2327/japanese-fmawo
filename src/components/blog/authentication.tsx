"use client";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "src/components/ui/card";
import { Input } from "src/components/ui/input";
import { Button } from "src/components/ui/button";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { fetcher } from "@/lib/fetch";
import { setToken } from "@/lib/token";
import { useRouter } from "next/navigation";
import useUserInfo from "@/hooks/useUserInfo";
import useSupervisorInfo from "@/hooks/useSupervisorInfo";
import { AllMemberInfo, Login } from "@/interface/auth.interface";
import { getWorkInfo } from "@/app/db/blog-client";

const formSchema = z.object({
  email: z.string().min(1),
  password: z.string().max(30).min(1),
});

export function BlogAuthentication({
  onChangeAuthentication,
}: {
  onChangeAuthentication?: (val: boolean) => void;
}) {
  const { setUserInfo, setWorkInfo, ...all } = useUserInfo();
  const { setSupervisorInfo } = useSupervisorInfo();
  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const result = await fetcher<Login>("/v2023/blog/login", {
      method: "POST",
      body: JSON.stringify({
        id: values.email,
        password: values.password,
      }),
    });

    setToken(result.accessToken, result.refreshToken);
    setUserInfo({
      id: result.id,
      mNo: result.mNo,
      rules: result.rules,
      role: result.role,
    });

    const workInfo = await getWorkInfo();
    setWorkInfo(workInfo);

    if (result.role === "supervisor") {
      const allMemberInfo = await fetcher<AllMemberInfo>(
        "/v2023/blog/allMemberInfo",
        {
          method: "POST",
        }
      );

      setSupervisorInfo({ allMemberInfo });
    }

    router.push("/admin/dashboard");
  }

  return (
    <Card className="max-w-md w-full mt-10">
      <CardHeader>
        <CardTitle className="text-black dark:text-white">Login</CardTitle>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>ID</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white text-black dark:text-white"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem className="space-y-1">
                  <FormLabel>Password</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      className="bg-white text-black dark:text-white"
                      type="password"
                    />
                  </FormControl>
                  <FormDescription></FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />
            <Button
              className="w-full bg-black dark:bg-white text-white dark:text-black"
              type="submit">
              Login
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
