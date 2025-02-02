"use client";

import Button from "@/components/atoms/buttons/Button";
import Checkbox from "@/components/atoms/Checkbox";
import { Input, InputElement } from "@/components/atoms/inputs/Input";
import Label from "@/components/atoms/Label";
import LogoText from "@/components/atoms/logos/LogoText";
import Link from "next/link";
import ReCAPTCHA from "react-google-recaptcha";

export default function Login() {
  return (
    <div
      className="flex min-h-screen w-full items-center justify-center"
      style={{
        background:
          "linear-gradient(hsla(var(--color-neutral-black-hsl)/0.3), hsla(var(--color-neutral-black-hsl)/0.3)), url(/images/login-bg.jpg) center/cover no-repeat",
      }}
    >
      <main className="w-full max-w-[490px] rounded-2xl bg-neutral-white p-10">
        <LogoText className="mx-auto [--size:138px]" />

        <p className="mt-4 text-center text-body-5 text-primary-700">
          مشتری گرامی در صورت بروز مشکل در هنگام ورود به نت بانک،‌ خواهشمند است
          حافظه نهان مرورگر خود را پاک نمایید.
        </p>

        <form className="mt-10 space-y-10">
          <div>
            <Input size="md">
              <InputElement
                placeholder="نام کاربری"
                name="username"
                autoFocus
              />
            </Input>

            <Input size="md" className="mt-6">
              <InputElement placeholder="کلمه عبور" name="password" />
            </Input>

            <div className="mt-2 flex items-center justify-between">
              <Link className="text-caption-1 text-primary-500" href="#">
                فراموشی رمز عبور
              </Link>

              <Label element={<Checkbox />} className="text-neutral-gray-2">
                مرا به خاطر بسپار
              </Label>
            </div>
          </div>

          <ReCAPTCHA
            sitekey={process.env.NEXT_PUBLIC_SITE_KEY}
            size="normal"
            className=""
          />

          <Button size="md" className="w-full">
            ورود
          </Button>
        </form>

        <Link
          href="#"
          className="mt-4 block text-center text-caption-1 text-neutral-gray-3"
        >
          نیاز به راهنمایی دارید؟
        </Link>
      </main>
    </div>
  );
}
