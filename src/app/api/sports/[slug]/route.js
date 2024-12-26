import { NextResponse } from 'next/server';
import { getSportBySlug } from '@/database/db';

export async function GET(request, context) {
  try {
    const { params } = context;
    const slug = params.slug;

    if (!slug) {
      return NextResponse.json(
        { error: "Le paramètre slug est requis" },
        { status: 400 }
      );
    }

    // Validation du slug (alphanumeric + tirets)
    if (!/^[a-z0-9-]+$/.test(slug)) {
      return NextResponse.json(
        { error: "Format de slug invalide" },
        { status: 400 }
      );
    }

    const sport = await getSportBySlug(slug);

    if (!sport) {
      return NextResponse.json(
        { error: "Sport non trouvé" },
        { status: 404 }
      );
    }

    return NextResponse.json(sport);
  } catch (error) {
    console.error("Erreur inattendue:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite" },
      { status: 500 }
    );
  }
}
