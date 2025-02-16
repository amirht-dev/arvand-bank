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
  mellat: "/images/operator/Mellat.png",
  parsian: "/images/operator/Parsian.png",
  pasargad: "/images/operator/Pasargad.png",
  eghtesadNovin: "/images/operator/Eghtesad_Novin.png",
  keshavarzi: "/images/operator/Keshavarzi.png",
  maskan: "/images/operator/Maskan.png",
};
