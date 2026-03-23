import Cardiology from "@/assets/icons/Cardiology";
import Dental from "@/assets/icons/Dental";
import Dermatology from "@/assets/icons/Dermatology";
import Endocrinology from "@/assets/icons/Endocrinology";
import FamilyMedicine from "@/assets/icons/FamilyMedicine";
import Gastroenterology from "@/assets/icons/Gastroenterology";
import GeneralPractice from "@/assets/icons/GeneralPractice";

import Neurology from "@/assets/icons/Neurology";

import Psychiatry from "@/assets/icons/Psychiatry";

import Rheumatology from "@/assets/icons/Rheumatology";
import TCM from "@/assets/icons/TCM";

import Urology from "@/assets/icons/Urology";
import VaccinationClinic from "@/assets/icons/VaccinationClinic";
import { SvgProps } from "react-native-svg";

export const CategoryList = [
  { name: "General Practice", iconName: "general-practice" },
  { name: "Family Medicine", iconName: "family-medicine" },

  { name: "Dermatology", iconName: "dermatology" },
  { name: "Cardiology", iconName: "cardiology" },

  { name: "Otorhinolaryngology (ENT)", iconName: "ent" },
  { name: "Psychiatry", iconName: "psychiatry" },
  { name: "Dental", iconName: "dental" },
  { name: "TCM", iconName: "tcm" },

  { name: "Gastroenterology", iconName: "gastroenterology" },
  { name: "Urology", iconName: "urology" },
  { name: "Neurology", iconName: "neurology" },
  { name: "Endocrinology", iconName: "endocrinology" },
  { name: "Rheumatology", iconName: "rheumatology" },
  { name: "Vaccination Clinic", iconName: "vaccination" },
];

export const iconMap: Record<string, React.ComponentType<SvgProps>> = {
  "general-practice": GeneralPractice,
  "family-medicine": FamilyMedicine,

  dermatology: Dermatology,
  cardiology: Cardiology,

  ent: Endocrinology,
  psychiatry: Psychiatry,
  dental: Dental,
  tcm: TCM,
  gastroenterology: Gastroenterology,
  urology: Urology,
  neurology: Neurology,
  endocrinology: Endocrinology,
  rheumatology: Rheumatology,
  vaccination: VaccinationClinic,
};
