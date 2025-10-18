
# UCH Add a network printers

## Fastest method

After you get the printer name, usually its labeled with a label maker on the exterior somewhere (Ex. AIPT2PA01)

Type <kbd>⌘</kbd> + <kbd>r</kbd> (WIN + r) to pull up the windows run dialog

```code
printui /im
```

- select Add a printer using an IP address or hostname
- **Device type:** Autodetect
- **Hostname or IP address:** "[printername].uch.ad.pvt"
  > Ex. AIPT2PA01.uch.ad.pvt

- Click <kbd>Next</kbd>

If it finds the printer it should ask you to select a driver, typically the default one highlighted should work

### Adding by IP address

If you don't have the printer IP address but you have a printer name open a terminal by 
- Open a run dialog <kbd>⌘</kbd> + <kbd>r</kbd> (WIN + r)
- Type ```wt``` which should open a windows terminal
- Type ```nslookup [printername]``` (Ex. ```nslookup AIPT2PA01```)
- Make sure the IP address you find returns pings by typing ```ping [IP address]``` (Ex. ```ping 168.200.195.108```)  


## Browsing the printserver domain

Many of the printers also have the printer server the printer is hosted under, typically a name like "PTR[N]-AMC" (Ex. PTR4-AMC)

- Type <kbd>⌘</kbd> (windows key)
- Type the printserver name preceded by a double backslash (Ex. ```\\PTR4-AMC```) and hit <kbd>Enter</kbd>
- A windows explorer dialog should open with printer icons, if you search this dir you should be able to find the printer
- Double clicking the printer should proceed to install it
