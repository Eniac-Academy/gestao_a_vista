import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

import type { ReactNode } from "react";

import { getData } from "../services/api";
import { stations } from "../data/stations";

interface DatabaseContextType {
  database: Record<string, any>;
  loading: boolean;
}

const DatabaseContext =
  createContext<DatabaseContextType | null>(null);

interface DatabaseProviderProps {
  children: ReactNode;
}

export function DatabaseProvider({
  children
}: DatabaseProviderProps) {

  const [database, setDatabase] =
    useState<Record<string, any>>({});

  const [loading, setLoading] =
    useState<boolean>(true);

  useEffect(() => {

    async function loadData() {

      try {

        const apiData =
          await getData();

        const mergedData:
          Record<string, any> = {};

        Object.entries(stations).forEach(
          ([key, station]) => {

            mergedData[key] = {

              ...station,

              ...(apiData[key] || {
                projects: [],
                processes: [],
                routines: [],
                shifts: []
              })

            };

          }
        );

        setDatabase(
          mergedData
        );

      } catch (error) {

        console.error(error);

      } finally {

        setLoading(false);

      }

    }

    loadData();

  }, []);

  return (

    <DatabaseContext.Provider
      value={{
        database,
        loading
      }}
    >

      {children}

    </DatabaseContext.Provider>

  );

}

export function useDatabase() {

  const context =
    useContext(DatabaseContext);

  if (!context) {

    throw new Error(
      "useDatabase deve ser usado dentro de um DatabaseProvider"
    );

  }

  return context;

}