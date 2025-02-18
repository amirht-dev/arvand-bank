import { ChartLineDots_Outline } from "@/components/atoms/icons/Charts&Diagram/ChartLineDots";
import { MoneyBills_Outline } from "@/components/atoms/icons/Money&Payment/MoneyBills";

export const sidebarMenu = {
  dashboard: {
    label: "داشبورد",
    href: "/dashboard",
    icon: ChartLineDots_Outline,
  },
  accountManagement: {
    label: "مدیریت حساب",
    href: "/account-management",
    icon: MoneyBills_Outline,
  },
  payment: {
    label: "پرداخت",
    icon: MoneyBills_Outline,
    items: {
      transfer: {
        label: "انتقال وجه",
        href: "/payment/transfer",
      },
    },
  },
};

export const operator = {
  mellat: {
    persian: "ملت",
    imageSrc: "/images/operator/Mellat.png",
  },
  parsian: {
    persian: "پارسیان",
    imageSrc: "/images/operator/Parsian.png",
  },
  pasargad: {
    persian: "پاسارگاد",
    imageSrc: "/images/operator/Pasargad.png",
  },
  eghtesadNovin: {
    persian: "اقتصاد نوین",
    imageSrc: "/images/operator/Eghtesad_Novin.png",
  },
  keshavarzi: {
    persian: "کشاورزی",
    imageSrc: "/images/operator/Keshavarzi.png",
  },
  maskan: {
    persian: "مسکن",
    imageSrc: "/images/operator/Maskan.png",
  },
};
