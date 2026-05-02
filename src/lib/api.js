import { categories } from "@/data/categories";
import { edugames, books } from "@/data/products";
import { recommendations } from "@/data/recommendations";
import { strengths } from "@/data/strengths";
import { plans } from "@/data/plans";

export function getCategories() {
  return categories;
}

export function getStrengths() {
  return strengths;
}

export function getFeaturedProducts(type) {
  if (type === "edugame") return edugames;
  return books;
}

export function getRecommendations() {
  return recommendations;
}

export function getPlans() {
  return plans;
}