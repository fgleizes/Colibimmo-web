import { useContext, useState } from "react"
import { UserContext } from "../../user-context"
import { Tab, Tabs } from 'react-bootstrap'
import "./ProfileTabs.css"

const formatDate = (dateToFormat) => {
  let date = new Date(dateToFormat)
  let day = date.getDate() < 10 ? "0" + date.getDate() : date.getDate()
  let month = date.getMonth() < 9 ? "0" + (date.getMonth() + 1) : (date.getMonth() + 1)
  let year = date.getFullYear()
  return `${day}/${month}/${year}`;
}

export const UserTabs = (props) => {
  const user = props.user
  const [key, setKey] = useState('userInformations')

  return (
    <div className="userContainer">
      <h2>Mon profil : </h2>
      <div className="userProfile">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant="tabs"
        >
          <Tab eventKey="userInformations" title="Informations">
            <UserTab user={user} />
          </Tab>
          {user.address &&
            <Tab eventKey="userAddress" title="Adresse">
              <AddressTab address={user.address}/>
            </Tab>
          }
        </Tabs>
      </div>
    </div>
  )
}

const UserTab = (props) => {
  const contextUser = useContext(UserContext)
  const user = props.user

  return (
    <ul>
      <li>Prénom : {contextUser.user.firstname}</li>
      <li>Nom : {contextUser.user.lastname}</li>
      <li>Téléphone : {user.phone}</li>
      <li>Email : {user.mail}</li>
      <li>Rôle : {user.role.name}</li>
      <li>Créé le : {formatDate(user.created_at)}</li>
      {user.updated_at && user.updated_at !== user.created_at && <li>Modifié le : {formatDate(user.updated_at)}</li>}
    </ul>
  )
}

export const AgencyTabs = (props) => {
  const agency = props.agency
  const [key, setKey] = useState('agencyInformations')

  return (
    <div className="agencyContainer">
      <h2>Mon agence : </h2>
      <div className="agencyDetails">
        <Tabs
          activeKey={key}
          onSelect={(k) => setKey(k)}
          variant="tabs"
        >
          <Tab eventKey="agencyInformations" title="Informations">
            <AgencyTab agency={agency} />
          </Tab>
          {agency.address &&
            <Tab eventKey="agencyAddress" title="Adresse">
              <AddressTab address={agency.address} />
            </Tab>
          }
        </Tabs>
      </div>
    </div>
  )
}

const AgencyTab = (props) => {
  const agency = props.agency

  return (
    <ul>
      <li>Nom : {agency.name}</li>
      <li>Téléphone : {agency.phone}</li>
      <li>Email : {agency.mail}</li>
      <li>Créé le : {formatDate(agency.created_at)}</li>
      {agency.updated_at && agency.updated_at !== agency.created_at && <li>Modifié le : {formatDate(agency.updated_at)}</li>}
    </ul>
  )
}

const AddressTab = (props) => {
  const address = props.address

  return (
    <ul>
      {address.number && <li>Numéro : {address.number}</li>}
      {address.street && <li>Rue : {address.street}</li>}
      {address.additional_address && <li>Complément d'adresse : {address.additional_address}</li>}
      {address.residence && <li>Résidence : {address.residence}</li>}
      {address.building && <li>Bâtiment : {address.building}</li>}
      {address.staircase && <li>Escalier : {address.staircase}</li>}
      {address.floor && <li>Etage : {address.floor}</li>}
      {address.city && <li>Ville : {address.city}</li>}
      {address.zip_code && <li>Code Postal : {address.zip_code}</li>}
      {address.department && <li>Département : {address.department}</li>}
      {address.region && <li>Région : {address.region}</li>}
    </ul>
  )
}