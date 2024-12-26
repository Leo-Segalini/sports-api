// src/api/sport/route.js
import { NextResponse } from 'next/server';
import { getSports } from '@/database/db';

export async function GET(request) {
  try {
    // Récupération des paramètres de pagination et de filtrage
    const { searchParams } = new URL(request.url);
    const page = parseInt(searchParams.get('page')) || 1;
    const limit = parseInt(searchParams.get('limit')) || 10;
    const search = searchParams.get('search') || '';
    const region = searchParams.get('region') || '';

    // Validation des paramètres
    if (page < 1) {
      return NextResponse.json(
        { error: "Le numéro de page doit être supérieur à 0" },
        { status: 400 }
      );
    }

    if (limit < 1 || limit > 50) {
      return NextResponse.json(
        { error: "La limite doit être comprise entre 1 et 50" },
        { status: 400 }
      );
    }

    const result = await getSports({ page, limit, search, region });

    return NextResponse.json(result);
  } catch (error) {
    console.error("Erreur inattendue:", error);
    return NextResponse.json(
      { error: "Une erreur inattendue s'est produite" },
      { status: 500 }
    );
  }
}
