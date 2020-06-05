import React, { useEffect, useState, ChangeEvent, FormEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi';
import { Map, TileLayer, Marker } from 'react-leaflet';
import api from '../../services/api';
import axios from 'axios';
import { LeafletMouseEvent } from 'leaflet';

import './styles.css';

import logo from '../../assets/logo.svg';

// !Fazer uma representação de um formato que um objeto vai ter
// !Formatar o formato que cada um dos itens terá na API
interface Item {
  id: number;
  title: string;
  image_url: string;
}

interface IBGEUFResponse {
  sigla: string;
}

interface IBGECityResponse {
  nome: string;
}

const CreatePoint = () => {
  const [items, setItems] = useState<Item[]>([]); //armazena o estado dos itens
  const [ufs, setUfs] = useState<string[]>([]);
  const [cities, setCities] = useState<string[]>([]); //armazenar as cidades

  const [initialPosition, setInitialPosition] = useState<[number, number]>(
    [0, 0]
  ); //armazena a posição atual no mapa do usuário

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
  });

  const [selectedUf, setSelectedUf] = useState('0'); //armazena a UF selecionada pelo usuário
  const [selectedCity, setSelectedCity] = useState('0'); //armazena a cidade selecionada pelo usuário
  const [selectedItems, setSelectedItems] = useState<number[]>([]); //armazena os itens selecionados pelo usuário
  const [selectedPosition, setSelectedPosition] = useState<
    [number, number]
  >([0, 0]); //armazena a posição no mapa selecionada pelo usuário

  const history = useHistory();

  // Executa assim que a tela for carregada - obtém as coordenadas do usuário
  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      const { latitude, longitude } = position.coords;

      setInitialPosition([latitude, longitude]);
    });
  }, []);

  //!(qual função será executada, quando essa função será executada: baseado em quando tal informação mudar)
  //!Será executado assim que o componente for exibido em tela e apenas uma única vez
  useEffect(() => {
    api.get('items').then((response) => {
      setItems(response.data); //itens terão a informação do response vindo da API
    });
  }, []);

  useEffect(() => {
    axios
      .get<IBGEUFResponse[]>(
        'https://servicodados.ibge.gov.br/api/v1/localidades/estados'
      )
      .then((response) => {
        const ufInitials = response.data.map((uf) => uf.sigla);

        setUfs(ufInitials);
      });
  }, []);

  // Carregar as cidades sempre que a UF mudar
  // É executada sempre que a UF ser alterada no select
  useEffect(() => {
    if (selectedUf === '0') {
      return;
    }

    axios
      .get<IBGECityResponse[]>(
        `https://servicodados.ibge.gov.br/api/v1/localidades/estados/${selectedUf}/municipios`
      )
      .then((response) => {
        const cityNames = response.data.map((city) => city.nome);

        setCities(cityNames);
      });
  }, [selectedUf]);

  // Seleção da UF
  // !event: ChangeEvent<HTMLSelectElement>: evento de alteração de um HTMLSelectElement
  function handleSelectUf(event: ChangeEvent<HTMLSelectElement>) {
    const uf = event.target.value;

    setSelectedUf(uf);
  }

  // Seleção da cidade
  function handleSelectCity(event: ChangeEvent<HTMLSelectElement>) {
    const city = event.target.value;

    setSelectedCity(city);
  }

  // Seleção no mapa
  function handleMapClick(event: LeafletMouseEvent) {
    setSelectedPosition([event.latlng.lat, event.latlng.lng]);
  }

  // Mudança nos inputs
  function handleInputChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  // Itens selecionados
  function handleSelectItem(id: number) {
    // intem já selecionado
    const alreadySelected = selectedItems.findIndex((item) => item === id);

    // Caso o item já esteja selecionado
    if (alreadySelected >= 0) {
      // contém todos os itens menos aquele que deve-se remover
      // Filtra na lista de itens selecionados, pegando aqueles em que o item for diferente do id que se está querendo remover
      const filteredItems = selectedItems.filter((item) => item !== id);

      setSelectedItems(filteredItems);
    } else {
      setSelectedItems([...selectedItems, id]);
    }
  }

  // Enviar para a API o cadastro de ponto de coleta
  async function handleSubmit(event: FormEvent) {
    event.preventDefault(); //evita o comportamento padrão do formulário (enviar para outra página)

    const { name, email, whatsapp } = formData;
    const uf = selectedUf;
    const city = selectedCity;
    const [latitude, longitude] = selectedPosition;
    const items = selectedItems;

    const data = {
      name,
      email,
      whatsapp,
      uf,
      city,
      latitude,
      longitude,
      items,
    };

    await api.post('/points', data);

    alert('Ponto de coleta criado');

    history.push('/'); //envia o usuário de volta para a Home
  }

  return (
    <div id="page-create-point">
      <header>
        <img src={logo} alt="Ecoleta" />

        <Link to="/">
          <FiArrowLeft />
          Voltar para home
        </Link>
      </header>

      <form onSubmit={handleSubmit}>
        <h1>
          Cadastro do <br /> ponto de coleta
        </h1>

        <fieldset>
          <legend>
            <h2>Dados</h2>
          </legend>

          <div className="field">
            <label htmlFor="name">Nome da entidade</label>
            <input
              type="text"
              name="name"
              id="name"
              onChange={handleInputChange}
            />
          </div>

          <div className="field-group">
            <div className="field">
              <label htmlFor="email">E-mail</label>
              <input
                type="email"
                name="email"
                id="email"
                onChange={handleInputChange}
              />
            </div>

            <div className="field">
              <label htmlFor="whatsapp">Whatsapp</label>
              <input
                type="text"
                name="whatsapp"
                id="whatsapp"
                onChange={handleInputChange}
              />
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Endereço</h2>
            <span>Selecione o endereço no mapa</span>
          </legend>

          <Map center={initialPosition} zoom={15} onClick={handleMapClick}>
            <TileLayer
              attribution='&amp;copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={selectedPosition} />
          </Map>

          <div className="field-group">
            <div className="field">
              <label htmlFor="uf">Estado (UF)</label>
              <select
                name="uf"
                id="uf"
                value={selectedUf}
                onChange={handleSelectUf}
              >
                <option value="0">Selecione uma UF</option>
                {ufs.map((uf) => (
                  <option key={uf} value={uf}>
                    {uf}
                  </option>
                ))}
              </select>
            </div>
            <div className="field">
              <label htmlFor="city">Cidade</label>
              <select
                name="city"
                id="city"
                value={selectedCity}
                onChange={handleSelectCity}
              >
                <option value="0">Selecione uma cidade</option>
                {cities.map((city) => (
                  <option key={city} value={city}>
                    {city}
                  </option>
                ))}
              </select>
            </div>
          </div>
        </fieldset>

        <fieldset>
          <legend>
            <h2>Ítens de coleta</h2>
            <span>Selecione um ou mais itens abaixo</span>
          </legend>

          <ul className="items-grid">
            {/* Percorre cada item do vetor e retorna algo para cada um */}
            {items.map((item) => (
              <li
                key={item.id}
                onClick={() => handleSelectItem}
                className={selectedItems.includes(item.id) ? 'select' : ''}
              >
                <img src={item.image_url} alt={item.title} />
                <span>{item.title}</span>
              </li>
            ))}
          </ul>
        </fieldset>

        <button type="submit">Cadastrar ponto de coleta</button>
      </form>
    </div>
  );
};

export default CreatePoint;
