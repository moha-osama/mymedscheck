"use client";

import React, { useState } from "react";
import Select from "react-select";
import { useRouter } from "next/navigation";
import { AsyncPaginate } from "react-select-async-paginate";
import { AiOutlineSearch } from "react-icons/ai";
import { updateSearchParams } from "@/utils";
import { ActionMeta } from "react-select";
import { SingleValue } from "react-select";

interface ReactSelectProps {
  products?: any;
}

type OptionType = {
  value: string;
  label: string;
};

const ReactSelect = ({ products }: ReactSelectProps) => {
  const router = useRouter();

  const optionsList: { label: string; value: string }[] = [
    { label: "Name", value: "name" },
    { label: "Composition", value: "composition" },
  ];
  const style = {
    control: (styles, { isDisabled }) => ({
      ...styles,
      background: "#cededf",
      width: "10rem",
      border: "none",
    }),
    option: (styles, { isFocused }) => {
      return {
        ...styles,
        backgroundColor: isFocused ? "#0B7A72" : undefined,
        color: isFocused ? "white" : "#69727A",
        cursor: "pointer",
      };
    },
    dropdownIndicator(base, props) {
      let changes = { color: "#085C60" };
      return Object.assign(base, changes);
    },
  };
  const customStyles = {
    control: (provided: any, state: any) => ({
      ...provided,
      border: "none",
      boxShadow: null,
      width: "30rem",
      margin: "0 0 0 2rem",
      cursor: state.isDisabled ? "not-allowed" : "pointer",
    }),
    option: (provided: any, state: any) => ({
      ...provided,
      backgroundColor: state.isFocused ? "#3699FF" : null,
      color: state.isFocused ? "white" : null,
    }),
    dropdownIndicator(provided: any, state: any) {
      let changes = { color: "#085C60" };
      return Object.assign(provided, changes);
    },
  };

  const [search, setSearch] = useState<any>();
  const [searchType, setSearchType] = useState(undefined);
  const [data, setData] = useState(products);

  const searchHandler = (
    newValue: SingleValue<string>,
    actionMeta: ActionMeta<string>
  ) => {
    setSearch(newValue);
  };

  const selectTypeHandler = (
    value: any,
    actionMeta: ActionMeta<OptionType>
  ) => {
    setSearchType(value);
    if (value) {
      const newPathName = updateSearchParams("option", value.value);
      router.push(newPathName);
    }
  };
  const loadOptions = async (search: string, loadedOptions: any) => {
    const filteredData = data.filter((item: string) =>
      item.toLocaleLowerCase().startsWith(search.toLocaleLowerCase())
    );
    const options = filteredData.map((item: string) => ({
      value: item.replace(/\s+/g, ""),
      label: item,
    }));
    return { options: options, hasMore: false };
  };

  return (
    <div className="flex bg-[white] rounded-l-lg">
      <div className="flex items-center pl-2">
        <Select
          instanceId="select"
          placeholder="Search by..."
          styles={style}
          options={optionsList}
          value={searchType}
          onChange={selectTypeHandler}
        />
      </div>
      <div className="relative flex items-center">
        <AiOutlineSearch className="text-[#7A7A7A] text-2xl absolute left-2 top-[50%] translate-y-[-50%]" />
        <AsyncPaginate
          isSearchable
          loadOptions={loadOptions}
          instanceId="search"
          placeholder="what are you looking for ?"
          styles={customStyles}
          value={search}
          onChange={searchHandler}
          isDisabled={!searchType}
        />
      </div>
    </div>
  );
};

export default ReactSelect;
