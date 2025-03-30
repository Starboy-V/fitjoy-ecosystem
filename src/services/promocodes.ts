
import { supabase } from "@/integrations/supabase/client";

export interface PromoCode {
  id: string;
  code: string;
  discount_amount: number;
  is_percentage: boolean;
  active: boolean;
  created_at: string;
  expires_at: string | null;
}

export const validatePromoCode = async (code: string): Promise<PromoCode | null> => {
  try {
    const { data, error } = await supabase
      .from("promocodes")
      .select("*")
      .eq("code", code)
      .eq("active", true)
      .single();

    if (error) {
      console.error("Error validating promo code:", error);
      return null;
    }

    // Check if promo code has expired
    if (data.expires_at && new Date(data.expires_at) < new Date()) {
      return null;
    }

    return data;
  } catch (error) {
    console.error("Error validating promo code:", error);
    return null;
  }
};

export const applyDiscount = (price: number, promoCode: PromoCode): number => {
  if (promoCode.is_percentage) {
    // Apply percentage discount
    const discountAmount = (price * promoCode.discount_amount) / 100;
    return Math.max(price - discountAmount, 0);
  } else {
    // Apply fixed discount
    return Math.max(price - promoCode.discount_amount, 0);
  }
};
